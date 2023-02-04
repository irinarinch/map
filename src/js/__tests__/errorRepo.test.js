import ErrorRepository from '../errorRepo';

const errorRepository = new ErrorRepository();

test('get error decoding', () => {
  expect(errorRepository.translate('4532')).toBe('Ошибка первая');
});

test('get unknown error', () => {
  expect(errorRepository.translate('450032')).toBe('Unknown error');
});
