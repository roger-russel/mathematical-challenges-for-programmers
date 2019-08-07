use std::collections::HashMap;

fn main() {

    let parameters = vec![
        String::from("123"),
        String::from("321"),
        String::from("1234"),
        String::from("224"),
        String::from("442"),
        String::from("422"),
        String::from("244"),
    ];

    let mut sorted_parameters:HashMap<String, Box<Vec<String>>> = HashMap::new();

    for it in &parameters {

        let mut sorted: Vec<char> = it.chars().collect();
        sorted.sort();

        let str_sorted = sorted.iter().collect::<String>();

        match sorted_parameters.get_mut(&str_sorted) {
            Some(value) => value.push(it.clone()),
            None => { 
                sorted_parameters.insert(str_sorted, Box::new(vec![it.clone()]) );
            }
        }
   
    }

    println!("{:?}",sorted_parameters);
}
