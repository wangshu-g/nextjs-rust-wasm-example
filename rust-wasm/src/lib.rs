extern crate hex;

use hex::{decode, encode};
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn get_hex(text: &str) -> String {
    encode(text)
}

#[wasm_bindgen]
pub fn restore_hex(text: &str) -> String {
    String::from_utf8(decode(text).unwrap()).unwrap()
}

#[cfg(test)]
mod tests {
    use crate::get_hex;
    use crate::restore_hex;

    #[test]
    fn it_works() {
        let temp = get_hex("hello world");
        println!("{}", temp);
        let temp2 = restore_hex(&temp);
        println!("{}", temp2);
    }
}
