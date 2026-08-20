import confetti from 'canvas-confetti';

export const triggerConfetti = (variant: 'standard' | 'milestone' | 'fireworks' = 'standard') => {
  try {
    if (variant === 'standard') {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
      });
    } else if (variant === 'milestone') {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      };

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } else if (variant === 'fireworks') {
      const end = Date.now() + 1.5 * 1000;
      const colors = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  } catch {
    // Gracefully handle if canvas is restricted
  }
};
