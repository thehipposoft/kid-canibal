"use client";

// Tiny singleton so components rendered outside PreLoader (e.g. VideoBanner)
// can know when the preloader has actually finished, without needing a
// shared React tree/context.
type Listener = () => void;

class PreloaderStatus {
    private done = false;
    private listeners = new Set<Listener>();

    markDone() {
        if (this.done) return;
        this.done = true;
        this.listeners.forEach((listener) => listener());
    }

    isDone() {
        return this.done;
    }

    // Fires immediately if the preloader already finished before this
    // subscriber mounted, so late subscribers never miss the signal.
    subscribe(listener: Listener) {
        if (this.done) {
            listener();
            return () => { };
        }
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }
}

export const preloaderStatus = new PreloaderStatus();
