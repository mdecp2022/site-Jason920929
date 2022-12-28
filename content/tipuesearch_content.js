var tipuesearch = {"pages": [{'title': 'About', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n github倉儲 \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'w10', 'text': 'w10小考成績 \xa0輸入班級及網址即可列出各班學生成績 \n import ast\n\nfrom browser import document, html, bind\n\nbrython_div = document["brython_div1"]\n# create a button using html\nbrython_div <= html.BUTTON("輸入 cname, url", id="get_cname")\n\nclass quiz:\ndef __init__(self, cname, url):\nself.cname = cname\nself.url = url\n\n# 定義一個函式, 以班級代號字串作為輸入, 可以傳回各班修課學員的學號數列\ndef get_stud(self):\n# 將課程的班級代號字串作為 dict 的 key, 而 2022 fall 的課程代號作為對應值\n# 使用者可以利用班級代號從 courses dict 取出課程代號\ncourses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n# 利用 c_name 從 courses 得到該學期的課程代號\nc = courses[self.cname]\n# 利用課程代號從學校教務主機取的該班修課人員名單\ncurl = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n# 讀出各修課人員資料後, 以跳行符號切割, 得到的 data 為數列\ndata = open(curl).read().split("\\n")\n# 因為最後一筆資料為空字串, 因此利用數列運算將其去除\nstud = data[:-1]\n# get_stud() 函式最後將對應班級的修課人員學號以數列格式傳回\nreturn stud\n\ndef get_score(self):\n# 利用 open() 與 read() 讀取考試結果 JSON 檔案\njson_data = open(self.url).read()\n# 利用 ast.literal_eval() 將字串 dict, 轉為程式可用的 dict 資料型別\nbig_dict = ast.literal_eval(json_data)\n# 從 big_dict 中, 取出 body 中的 testuser 欄位資料\ndata = big_dict["body"]["testuser"]\n# 定義一個空 dict 資料變數, 隨後利用迴圈逐一將學號作為 key, 考試成績為 valude\n# 組成 quiz_dict 的資料內容, 以便之後可以用學號當作輸入, 取得該員考試成績\nquiz_dict = {}\nfor i in data:\n# data 資料中的 user_name 為考試學員的帳號, 也就是學號\nstud_id = data[i]["user_name"]\n# data 資料中的 total_score 欄位為考試成績\n# 因為考試成績為字串, 先轉為浮點數後, 再轉為整數\nstud_score = int(float(data[i]["total_score"]))\n# 逐一以學號為 key, 考試成績為對應 value, 將資料放入 quiz_dict\nquiz_dict[stud_id] = stud_score\n# 取得各學員的考試成績 quiz_dict 後, 將資料傳回\nreturn quiz_dict\n\ndef gen_result(stud, score):\nabs_num = 0\nbrython_div <= html.BR()\nfor i in stud:\nbrython_div <= i + ":"\ntry:\ns = score[i]\nexcept:\ns = "缺考"\nabs_num += 1\nbrython_div <= s\nbrython_div <= html.BR()\nbrython_div <= "總計有 " + str(abs_num) + "人缺考"\n\n@bind(document["get_cname"], \'click\')\ndef get_cname(env):\nuser_input = input("請輸入 cname,url")\ncname_url = user_input.split(",")\ncname = cname_url[0]\nurl = cname_url[1]\ndata = quiz(cname, url)\nstud = data.get_stud()\nscore = data.get_score()\n# 以 stud, score 為輸入, 列出展示用的超文件結果\ngen_result(stud, score)\n\n\n \n w10-2 \n A = [i for i in range(1,10,2)]\nprint(A) \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W12', 'text': 'ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n ex2 \xa0(攝氏轉換華氏程式) \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'w13', 'text': 'ex1 \n f = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c)\nprint(c,c*9/5 + 32) \n \n ex2 \xa0新增中文註解 \n \'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\n#print(type(c))\nc = float(c) 浮點\nprint("你輸入的攝氏溫度: " + str(c), "等於華氏溫度: " + str(c*9/5 + 32))\n \n 心得：我現在終於慢慢了解這堂課的運作方式，也感謝老師為我解答 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n \n \n 取使用者輸入 \n 心得:想問老師要如何改才能在輸入完攝氏溫度後轉華氏溫度？ \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '1. 為何學習計算機程式需要建立個人倉儲 \n A： 才可以建立一個網站 \n 2. 全球資訊網能夠提供什麼功能或有什麼優點 \n A： 主要是文字檔案格式化和超文件標示語言(HTML) 除格式化文字以外，網頁還可能包含圖片、影片、聲音等... 這些元件會在使用者的網頁瀏覽器中呈現為多媒體內容的連貫頁面 \n 3. Replit, stud.cycu.org 與 localhost 分別代表甚麼? \n A： (1)Replit是一個提供線上集成開發環境服務的公司 \n (2)stud是學校的 \n (3)localhost是一個在電腦網路中用於表示此電腦的主機名 \n 4. https, ssh 到底提供使用者那些功能或優點? \n A： (1)https的全稱是超文本傳輸安全協議（Hypertext Transfer Protocol Secure），是一種網絡安全傳輸協議，可實現瀏覽器和網站服務器數據傳輸加密。 \n (2)ssh的全稱是安全外殼協定（Secure Shell Protocol）是一種加密的網路傳輸協定，可在不安全的網路中為網路服務提供安全的傳輸環境。 \n 5. Brython 與 Python 有甚麼差別? \n A： Brython比較適合入門 \n \n \n 6. 能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n A： 代表很厲害 \n 7. 變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? \n A： 很專業的東西，對於非資工的學生太困難 \n \n \n \n \n \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w15-2', 'text': '心得：覺得這堂課越來越酷了，雖然對我來說還是超難，但感覺架網站還蠻有趣的，也許未來會用到？ \n  納入 Brython 環境  \n \n \n  啟動 Brython  \n \n \n  給定 brython_div1 division 標註  \n \n  加入啟動按鈕後的 Rect 行走程式原始碼  \n \n', 'tags': '', 'url': 'w15-2.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};