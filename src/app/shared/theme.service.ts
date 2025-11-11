import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme-mode';
  private readonly mediaQuery = '(prefers-color-scheme: dark)';

  public modeSubject = new BehaviorSubject<ThemeMode>('light');
  readonly mode$ = this.modeSubject.asObservable();

  initTheme(): void {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      // Default to light theme during SSR
      this.modeSubject.next('light');
      return;
    }

    // Check if theme class is already set (from inline script)
    const htmlElement = document.documentElement;
    const hasDarkClass = htmlElement.classList.contains('dark');
    
    // Get saved theme or detect from class or system preference
    const saved = (localStorage.getItem(this.storageKey) as ThemeMode | null);
    const prefersDark = window.matchMedia?.(this.mediaQuery).matches ?? false;
    
    // Use saved preference, or current class state, or system preference
    let initial: ThemeMode;
    if (saved) {
      initial = saved;
    } else if (hasDarkClass) {
      initial = 'dark';
    } else {
      initial = prefersDark ? 'dark' : 'light';
    }
    
    this.applyTheme(initial);
  }

  toggleTheme(): void {
    const next: ThemeMode = this.modeSubject.value === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  private applyTheme(mode: ThemeMode): void {
    this.modeSubject.next(mode);
    
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
    
    // Only save to localStorage if it's available
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, mode);
    }
  }
}




