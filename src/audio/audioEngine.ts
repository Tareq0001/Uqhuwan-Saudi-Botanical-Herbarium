/**
 * UQHUWAN Botanical Acoustic Engine
 * Procedural Web Audio API sound synthesis:
 * - Mountain breeze / cedar wind (modulated filtered pink noise)
 * - Hydro-distillation water droplets (resonant decaying acoustic drops)
 * - Harmonic bloom completion chime (celestial pentatonic chord)
 */

class BotanicalAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isWindActive: boolean = false;
  private masterGain: GainNode | null = null;
  
  // Wind synthesis nodes
  private windGain: GainNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private windSource: AudioBufferSourceNode | null = null;
  private windLfo: OscillatorNode | null = null;

  constructor() {
    // Initialized on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.initContext();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(
        this.isMuted ? 0 : 0.7,
        this.ctx.currentTime + 0.1
      );
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Generates continuous mountain breeze through cedar needles using procedural noise
   */
  public startMountainWind() {
    if (this.isWindActive) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const bufferSize = this.ctx.sampleRate * 3;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.windSource = this.ctx.createBufferSource();
      this.windSource.buffer = noiseBuffer;
      this.windSource.loop = true;

      this.windFilter = this.ctx.createBiquadFilter();
      this.windFilter.type = 'bandpass';
      this.windFilter.frequency.setValueAtTime(380, this.ctx.currentTime);
      this.windFilter.Q.setValueAtTime(2.2, this.ctx.currentTime);

      this.windGain = this.ctx.createGain();
      this.windGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.windGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 2.0);

      // Low frequency breeze modulator
      this.windLfo = this.ctx.createOscillator();
      this.windLfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);

      this.windLfo.connect(lfoGain);
      lfoGain.connect(this.windFilter.frequency);

      this.windSource.connect(this.windFilter);
      this.windFilter.connect(this.windGain);
      this.windGain.connect(this.masterGain);

      this.windSource.start();
      this.windLfo.start();
      this.isWindActive = true;
    } catch {
      // Audio autoplay policy handled
    }
  }

  public stopMountainWind() {
    if (!this.isWindActive || !this.windGain || !this.ctx) return;
    this.windGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.0);
    setTimeout(() => {
      try {
        this.windSource?.stop();
        this.windLfo?.stop();
        this.windSource?.disconnect();
        this.windLfo?.disconnect();
      } catch {
        // Ignored
      }
      this.isWindActive = false;
    }, 1100);
  }

  /**
   * Generates organic water droplet sound during distillation
   */
  public playWaterDroplet() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const baseFreq = 750 + Math.random() * 500;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, now + 0.08);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  /**
   * Harmonious pentatonic bloom chime (A4, C#5, E5, G#5, B5)
   */
  public playBloomChime() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const freqs = [440.0, 554.37, 659.25, 830.61, 987.77, 1318.5];
    const now = this.ctx.currentTime;

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const noteTime = now + idx * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.linearRampToValueAtTime(0.12 / (idx * 0.4 + 1), noteTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 2.0);
    });
  }

  /**
   * Soft organic UI click
   */
  public playUiClick() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.05);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.06);
  }
}

export const audioEngine = new BotanicalAudioEngine();
