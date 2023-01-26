// this가 참조하는 값이 바뀌는 것은 scope가 아닌 함수가 실행되는 방식과 관련있다.
// setTimeout() 콜백에서 키워드 this는 window 객체를 참조한다.

// 메서드를 정의하는 데는 일반적으로 화살표 함수를 사용하지 않는다.

// 다른 상황에서는 키워드 this와 그 지속적인 변경을 처리한다.
const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000);
    },
};
