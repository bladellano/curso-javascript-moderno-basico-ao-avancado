
(function (doc) {

    function criaCalculadora() {
        return {
            //atributos
            display: doc.querySelector('.display'),
            //inicia           
            init() {
                this.clickButtons();
                this.pressEnter();
            },
            //métodos
            clearDisplay() {
                this.display.value = '';
            },
            deleteOne() {
                this.display.value = this.display.value.slice(0, -1);
            },
            doAccount() {
                let account = this.display.value;
                try {
                    account = eval(account);
                    if (!account) return alert('Conta inválida.');
                    this.display.value = String(account);
                } catch (e) {
                    return alert('Conta inválida.');
                }
            },
            pressEnter(){
                this.display.addEventListener('keyup',e=>{
                    if(e.keyCode===13){
                        this.doAccount();
                    }
                });
            },
            clickButtons() {
                doc.addEventListener('click', e => {
                    const el = e.target;
                    if (el.classList.contains('btn-num')) {
                        this.btnToDisplay(el.innerText);
                    }
                    if (el.classList.contains('btn-clear')) {
                        this.clearDisplay();
                    }
                    if (el.classList.contains('btn-del')) {
                        this.deleteOne();
                    }
                    if (el.classList.contains('btn-eq')) {
                        this.doAccount();
                    }
                });
            },
            btnToDisplay(valor) {
                this.display.value += valor;
            },

        }
    }

    const calculadora = criaCalculadora();
    calculadora.init();

})(document);