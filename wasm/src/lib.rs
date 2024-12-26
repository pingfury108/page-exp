use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize, Debug)]
pub struct PluginInfo {
    pub name: String,
    pub describe: String,
}

#[wasm_bindgen]
pub struct QiChaCha {}

#[wasm_bindgen]
impl QiChaCha {
    pub fn info() -> JsValue {
        let plugin = PluginInfo {
            name: "企查查".into(),
            describe: "企查查企业信息插件".into(),
        };
        serde_wasm_bindgen::to_value(&plugin).unwrap()
    }
    pub fn is_run(url: &str) -> bool {
        true
    }
}
