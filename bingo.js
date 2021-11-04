#!/usr/bin/node
let List = require('collections/list');
/**
 * Name_Function: Bingo_Cards
 * @rows - params 1
 * @columns - params 2
 * @lower_bound - params 3
 * @upper_bound - params 4
 * Return - card_columns
 */
function bingo_card(rows, columns, lower_bound, upper_bound) {
    let card_columns = new List([]);
    let increment = upper_bound;
    upper_bound = int(upper_bound / 5);

    for (let key in columns) {
        let current_column = new List();
        while (current_column.lenght() < rows) {
            candidate = generate_random_number(lower_bound, upper_bound)
            if (candidate != current_column)
            {
                current_column.append(candidate);
            }
        }
        lower_bound += increment;
        upper_bound += increment;
        card_columns.append(current_column);        
    }
    card_columns[2][2] = "";
    return card_columns;
}


/**
 * Name_Of_Class: BingoCards
 * Instances: @Columns
 */

class BingoCards {
    constructor (columns) {
        this.checked = new List([]); // Aun no definido
        this.columns = columns;
    }
    get get_columns(column) {
        return column > columns.length ? null : columns[column];
    }

    /**
     * Function_Set: check_number
     * @param {int} number 
     */
    check_number(number) {
        (number in this.get_card_numbers()) ? true : this.checked.append(number);
    }

    get get_card_numbers() {
        let numbers = new List([]);
        for (let column in this.columns) {
            numbers += column;
        }
        return numbers;
    }
}

/**
 * Name_Of_Class: Bingo
 */

class Bingo {
    available_numbers = [];
    constructor () {
        this.available_numbers = [];
        for (let i = 1; i < 76; i++) {
            this.available_numbers.append(i);
        }
    }

    /**
     * Function_Set: call_number
     * return - random
     */
    call_number() {
        if (this.available_numbers.length === 0) {
            return
        }
        random = this.available_numbers[generate_random_number(0, this.available_numbers.length)]
        this.available_numbers.remove(random);
        return random
    }

    /**
     * Function_Set: check_card
     * return - true or false
     */
    check_card(card) {
        for (let number in card.get_card_numbers()) {
            if (number in this.available_numbers) {
                return false;
            }
        }
        return true;
    }
}


/**
 * Name_Function: generate_random_number
 * @lower_bound - params 3
 * @upper_bound - params 4
 * Return - Math.random() * (upper_bound - lower_bound) + lower_bound
 */
function generate_random_number(lower_bound, upper_bound){
    return Math.random() * (upper_bound - lower_bound) + lower_bound;
}