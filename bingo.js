#!/usr/bin/node
let List = require('collections/list');

function bingo_card(rows, columns, lower_bound, upper_bound) {
    let card_columns = new List([]);
    let increment = upper_bound;
    upper_bound = int(upper_bound / 5);

    for (const key in columns) {
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





function generate_random_number(lower_bound, upper_bound){
    random = Math.random() * (upper_bound - lower_bound) + lower_bound;
    return random;
}