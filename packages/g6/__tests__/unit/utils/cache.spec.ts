import { Circle } from '@antv/g';
import { cacheStyle, getCachedStyle } from '../../../src/utils/cache';

describe('cache', () => {
  it('cacheStyle and ', () => {
    const circle = new Circle({
      style: {
        r: 10,
        fill: 'red',
        stroke: 'blue',
      },
    });

    cacheStyle(circle, ['fill', 'stroke']);

    circle.style.fill = 'green';

    expect(getCachedStyle(circle, 'fill')).toBe('red');
  });
});
