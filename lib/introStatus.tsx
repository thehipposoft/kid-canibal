type Listener = () => void;

let done = false;
const listeners = new Set<Listener>();

// Misma forma que preloaderStatus: subscribe() dispara inmediato si ya
// terminó, así ningún componente se queda esperando una señal que ya pasó
export const introStatus = {
  markDone() {
    if (done) return;
    done = true;
    listeners.forEach((listener) => listener());
    listeners.clear();
  },
  subscribe(listener: Listener) {
    if (done) {
      listener();
      return () => {};
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  isDone() {
    return done;
  },
};