import {sum} from '../core/sum'
import {fibonacci} from '../core/fibo'

test('should sum two numbers', () => {
	const result = sum(1,2)
	const expected = 3;
	
    expect(result).toBe(expected);
});
test('equality of objects', () => {
	const data = {one:1};
	data ['two'] = 2;
	const expected={one:1,two:2}
    expect(data).toEqual(expected);
});
describe('Fibonacci should',()=>{
    it('return zero if receive zero',()=>{
        expect(fibonacci(0)).toBe(0);
    });
    it('return one if receive one',()=>{
        expect(fibonacci(1)).toBe(1);
    });
    it('return one if receive two',()=>{
        expect(fibonacci(2)).toBe(1);
    });
    it('return one if receive three',()=>{
        expect(fibonacci(3)).toBe(2);
    });
    it('return one if receive four',()=>{
        expect(fibonacci(4)).toBe(3);
    });
});




/*import {sum} from '../core/sum'

test('should sum two numbers', () => {
    //Arrange
    const a=1;
    const b=2;
    const expected=3;

    //Act
    const result=sum(a+b)

    //Assert
    expected(result).toBe(expected);

})
*/