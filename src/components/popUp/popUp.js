class Popup {
    constructor($root) {

        this.$root = $root;
    }
    init() {
        this.$root.click(this.hide.bind(this));
    }

    show() {
        this.$root.addClass('active-modal');
    }

    hide({ target }) {
        console.log(target);
        if (target.classList.contains('sign-component') || target.classList.contains('close')) {
            this.$root.removeClass('active-modal');
        }
    }
}

export default Popup;
