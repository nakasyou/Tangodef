# Tangodef Dataset
Tangodefのデータセットをここに配置していきます。
## About folders
- `.tangolet` フォルダの中身に、みんなの学習データが保存されます。いじらないでください。
## How do I add dataset?
`.tangodef.json`ファイルで記述します。このフォルダの中に置かれたファイルはインデックスされます。
例:
```json
{
  "name":"不規則過去形動詞",
  "set":[
    {"def":"eat","ans":"ate"},
    {"def":"go","ans":"went"}
  ]
}
```
です。