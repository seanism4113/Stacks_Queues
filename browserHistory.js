class BrowserHistory {
    constructor () {
        this.back_stack = empty Stack;
        this.front_stack = empty Stack;
        this.current_page = null;
    }
    visit(new_page){
        if (this.back_stack !== null) {
            this.back_stack.push(new_page)
        }
            this.current_page = new_page
            this.front_stack.clear()
    }

    goBack(){
        this.front_stack.push(this.current_page)
        this.current_page = this.back_stack.pop()
    }

    goForward(){
        this.back_stack.push(this.current_page)
        this.current_page = this.front_stack.pop()
    }

    getCurrentPage(){
        return this.current_page
    }
}