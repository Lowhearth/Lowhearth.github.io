var _0x1cf8b1 = _0x3634;
(function (_0x14c30d, _0x31c1d2) {
  var _0x29f400 = _0x3634,
    _0x18f81f = _0x14c30d();
  while (!![]) {
    try {
      var _0x3aac90 =
        (parseInt(_0x29f400(0x109)) / 0x1) *
          (-parseInt(_0x29f400(0x106)) / 0x2) +
        -parseInt(_0x29f400(0xee)) / 0x3 +
        (parseInt(_0x29f400(0x103)) / 0x4) * (parseInt(_0x29f400(0xf8)) / 0x5) +
        -parseInt(_0x29f400(0xff)) / 0x6 +
        parseInt(_0x29f400(0x104)) / 0x7 +
        (-parseInt(_0x29f400(0xf3)) / 0x8) *
          (-parseInt(_0x29f400(0x108)) / 0x9) +
        (-parseInt(_0x29f400(0xf7)) / 0xa) * (parseInt(_0x29f400(0xed)) / 0xb);
      if (_0x3aac90 === _0x31c1d2) break;
      else _0x18f81f['push'](_0x18f81f['shift']());
    } catch (_0x177980) {
      _0x18f81f['push'](_0x18f81f['shift']());
    }
  }
})(_0x4a7b, 0xe9b6b);
var canvas = document['getElementById'](_0x1cf8b1(0xe9)),
  ctx = canvas[_0x1cf8b1(0xfa)]('2d'),
  canvasWidth = canvas[_0x1cf8b1(0x10a)],
  canvasHeight = canvas[_0x1cf8b1(0xf9)];
function _0x4a7b() {
  var _0x3d0560 = [
    'pause',
    'fillStyle',
    'shift',
    '2723886txEhau',
    'rgba(246,\x20231,\x20188,0.3)',
    'strokeStyle',
    'slice',
    '4nSRPrZ',
    '5931618sTTLFR',
    'stroke',
    '46JhxMXk',
    'length',
    '15665778EMVLad',
    '17537kLdeXi',
    'width',
    'play',
    'push',
    'beginPath',
    'board',
    'keyCode',
    'moveTo',
    'lineTo',
    '4887949dlmYyZ',
    '3080289BGdKpR',
    'audioWASD.wav',
    'userInteracted',
    'documentElement',
    'closePath',
    '8JvlJlU',
    'clientHeight',
    'log',
    'lineWidth',
    '10eVBUSb',
    '3488645mQuTLn',
    'height',
    'getContext',
    'currentTime',
  ];
  _0x4a7b = function () {
    return _0x3d0560;
  };
  return _0x4a7b();
}
canvas[_0x1cf8b1(0xf9)] = document[_0x1cf8b1(0xf1)][_0x1cf8b1(0xf4)] * 0.9;
var currentPosition = [0x0, 0x0],
  audio = new Audio(_0x1cf8b1(0xef));
const stepSize = 0x4,
  memories = [],
  unconsciouMemories = [];
function _0x3634(_0x523f0f, _0x3bb846) {
  var _0x4a7b08 = _0x4a7b();
  return (
    (_0x3634 = function (_0x363442, _0x585e84) {
      _0x363442 = _0x363442 - 0xe9;
      var _0x1847d6 = _0x4a7b08[_0x363442];
      return _0x1847d6;
    }),
    _0x3634(_0x523f0f, _0x3bb846)
  );
}
let forgetting = ![];
memories[_0x1cf8b1(0x10c)](currentPosition[_0x1cf8b1(0x102)]()),
  (window['onkeydown'] = (_0x2c1d55) => {
    var _0x4d7ec9 = _0x1cf8b1;
    (window[_0x4d7ec9(0xf0)] = !![]),
      ctx[_0x4d7ec9(0x10d)](),
      (ctx[_0x4d7ec9(0xf6)] = '4'),
      (ctx['strokeStyle'] = 'rgb(252,\x2063,\x20126)'),
      ctx[_0x4d7ec9(0xeb)](currentPosition[0x0], currentPosition[0x1]),
      audio[_0x4d7ec9(0xfc)](),
      (audio[_0x4d7ec9(0xfb)] = 0.04),
      (audio['playbackRate'] = 0.5);
    memories[_0x4d7ec9(0x107)] &&
      !forgetting &&
      ((forgetting = !![]), startForgetting());
    switch (_0x2c1d55[_0x4d7ec9(0xea)]) {
      case 0x57:
        ctx['lineTo'](
          currentPosition[0x0] + 0x0,
          currentPosition[0x1] - stepSize
        ),
          (currentPosition[0x1] = currentPosition[0x1] - stepSize),
          audio[_0x4d7ec9(0x10b)]();
        break;
      case 0x41:
        ctx['lineTo'](
          currentPosition[0x0] - stepSize,
          currentPosition[0x1] + 0x0
        ),
          (currentPosition[0x0] = currentPosition[0x0] - stepSize),
          audio[_0x4d7ec9(0x10b)]();
        break;
      case 0x53:
        ctx['lineTo'](
          currentPosition[0x0] + 0x0,
          currentPosition[0x1] + stepSize
        ),
          (currentPosition[0x1] = currentPosition[0x1] + stepSize),
          audio[_0x4d7ec9(0x10b)]();
        break;
      case 0x44:
        ctx[_0x4d7ec9(0xec)](
          currentPosition[0x0] + stepSize,
          currentPosition[0x1] + 0x0
        ),
          (currentPosition[0x0] = currentPosition[0x0] + stepSize),
          audio['play']();
        break;
    }
    memories[_0x4d7ec9(0x10c)](currentPosition[_0x4d7ec9(0x102)]()),
      ctx['stroke'](),
      ctx[_0x4d7ec9(0xf2)]();
  }),
  (startForgetting = () => {
    setTimeout(() => {
      const _0x17153e = setInterval(() => {
        var _0x530dba = _0x3634;
        !memories['length'] &&
          (clearInterval(_0x17153e),
          setTimeout(() => {
            var _0x2e5989 = _0x3634;
            fadeOut(), console[_0x2e5989(0xf5)]('<3');
          }, 0x3e8));
        ctx[_0x530dba(0x10d)](),
          (ctx['lineWidth'] = '5'),
          (ctx[_0x530dba(0x101)] = 'rgb(74,\x2074,\x2074)');
        const _0x5cb3fa = [memories[0x0][0x0], memories[0x0][0x1]];
        memories[_0x530dba(0xfe)]();
        const _0x3a0add = [memories[0x0][0x0], memories[0x0][0x1]];
        ctx[_0x530dba(0xeb)](_0x5cb3fa[0x0], _0x5cb3fa[0x1]),
          ctx[_0x530dba(0xec)](_0x3a0add[0x0], _0x3a0add[0x1]),
          ctx[_0x530dba(0x105)](),
          ctx[_0x530dba(0xf2)]();
      }, 0xfa);
    }, 0x3e8);
  });
function fadeOut() {
  var _0x24757a = _0x1cf8b1;
  (ctx[_0x24757a(0xfd)] = _0x24757a(0x100)),
    ctx['fillRect'](
      0x0,
      0x0,
      canvas[_0x24757a(0x10a)],
      canvas[_0x24757a(0xf9)]
    ),
    setTimeout(fadeOut, 0x64);
}
