export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      ['4532', 'Ошибка первая'],
      ['4535', 'Ошибка вторая'],
      ['4538', 'Ошибка третья'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
