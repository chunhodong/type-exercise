class AbstractBird {
    fly() {
        this.flySound('padak padak');
    }
    getHabitate() {
    }
}
class WildGoose extends AbstractBird {
    flySound(sound) {
        throw new Error("Method not implemented.");
    }
}
