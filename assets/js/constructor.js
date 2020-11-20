function Calculator() {
  this.display = document.querySelector('.display');

  this.init = () => {
    this.handleButtonClick();
  };

  this.handleButtonClick = () => {
    document.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('btn-num')) {
        this.handleButtonToDisplay(element.innerText);
      }

      if (element.classList.contains('btn-clear')) {
        this.handleClearDisplay();
      }

      if (element.classList.contains('btn-del')) {
        this.handleDeleteOne();
      }

      if (element.classList.contains('btn-eq')) {
        this.handleCalculate();
      }
    });
  };

  this.handleButtonToDisplay = (value) => {
    this.display.value += value;
  };

  this.handleClearDisplay = () => {
    this.display.value = '';
  };

  this.handleDeleteOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.handleCalculate = () => {
    let calc = this.display.value;
    try {
      calc = eval(calc);
      if (!calc) {
        alert('Conta inválida!');
        return;
      }

      this.display.value = String(calc);
    } catch (e) {
      alert('Algo de errado não está certo!');
      return;
    }
  };
}

const calculator = new Calculator();
calculator.init();