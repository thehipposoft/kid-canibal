"use client";

// Tiny singleton pub/sub so any client component can register videos it
// renders (e.g. ProjectsFixed) and PreLoader can listen for real load
// progress without needing a shared React tree/context.
type Listener = () => void;

class VideoPreloadTracker {
    private total = 0;
    private loaded = 0;
    private listeners = new Set<Listener>();

    register(count: number) {
        this.total += count;
        this.emit();
    }

    // Mirrors register() so effects that re-run (React StrictMode's
    // mount->cleanup->mount in dev) can undo their own registration instead
    // of double-counting total and making isDone() unreachable.
    unregister(count: number) {
        this.total = Math.max(0, this.total - count);
        this.loaded = Math.min(this.loaded, this.total);
        this.emit();
    }

    markLoaded() {
        this.loaded = Math.min(this.total, this.loaded + 1);
        this.emit();
    }

    getProgress() {
        return this.total === 0 ? 0 : this.loaded / this.total;
    }

    isDone() {
        return this.total > 0 && this.loaded >= this.total;
    }

    subscribe(listener: Listener) {
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }

    private emit() {
        this.listeners.forEach((listener) => listener());
    }
}

export const videoPreloadTracker = new VideoPreloadTracker();
