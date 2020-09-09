/**
 * @des: svg 라인 생성 함수
 * @param: array
 * @return: svg path
 * */

const d3 = {}
d3.svg = {}
d3.svg.line = function () {
  let getX = point => point[0]
  let getY = point => point[1]
  const interpolate = points => points.join("L")

  function line (data) {
    const segments = [];
    const points = [];
    const len = data.length;
    let i = 0;

    function segment() {
      segments.push('M', interpolate(points))
    }
    for (i; i < len; i ++) {
      const d = data[i]  // data[i] 를 d라는 변수로 할당하지 않으면 getX.call 과 getY.call 두번 호출이 일어나기 때문에
      points.push([+getX.call(this, d, i), +getY.call(this, d, i)]) // 함수앞 + 연산자가 붙는 경우 강제 number 타입 변환을 하여 출력한다.
      // https://stackoverflow.com/questions/5450076/whats-the-significant-use-of-unary-plus-and-minus-operators
    }
    if (points.length) {
      segment()
    }

    return segments.length ? segments.join('') : null
  }
  line.x = function(funcToGetX) {
    if (!arguments.length) return getX
    getX = funcToGetX
    return line
  }

  line.y = function(funcToGetY) {
    if (!arguments.length) return getY
    getY = funcToGetY
    return line
  }

  return line
}

const arrayData = [ [10, 130], [100, 60], [190, 160], [280,10]]
const lineGenerator = d3.svg.line()
const path = lineGenerator(arrayData)
