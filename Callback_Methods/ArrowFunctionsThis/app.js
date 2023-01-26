// 화살표 함수를 사용하면 this는 객체가 아닌 window가 된다.
// 이는 scope가 아닌 함수가 실행되는 방식과 관련있다.

// setTimeout() 콜백에서 키워드 this는 window 객체를 참조한다.
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
