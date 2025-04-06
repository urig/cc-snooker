import { Sink } from './Sink';
import { Score } from './Score';

export class Snooker {
    constructor() {}

    addPlayer(name: string): void {
        // TODO: Implement this method
    }

    recordMiss(playerName: string): string {
        // TODO: Implement this method
        return "";
    }

    recordShot(playerName: string, shotResult: Sink): number {
        // TODO: Implement this method
        return 0;
    }

    getScore(): Score {
        // TODO: Implement this method
        return new Score(0, 0);
    }
} 