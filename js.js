var a = document.querySelector("canvas"),
    c = a.getContext("2d");

a.setAttribute('width', $('.container').width());
a.setAttribute('height', window.innerHeight - $('#btn').outerHeight() - 10);

a.ontouchstart = function (e) {
  e.preventDefault();
  c.moveTo(e.touches[0].pageX, e.touches[0].pageY);
};

a.ontouchmove = function (e) {
  c.lineTo(e.touches[0].pageX, e.touches[0].pageY);
  c.stroke();
};




window.onload = function() {
    liff
        .init({
            liffId: "1653591503-06QwxbGD"
        })
        .then(() => {
            //ここに処理を書く

            //ボタンに送信処理を追加
            document.getElementById('btn').addEventListener('click', function() {
                //データを取得
                var cdata = canvas.toDataURL('image/png');
                var postdata ={
                        img: cdata,
                        unm: 'テストユーザー'
                    };
                
                //データをGASに送る
                $.post('https://script.google.com/macros/s/AKfycbxjeLYDEopPbnpZerC0X2uuzvOY9W8d2swx2q2rjasWyre7FAA/exec',postdata)

                    //サーバーからの返信を受け取る
                    .done( function(data) {
                        //メッセージを送る
                        liff.sendMessages([
                            {
                            type:'text',
                            text:'送信成功'
                            }
                        ])
                    })

                    //通信エラーの場合
                    .fail( function() {
                        //メッセージを送る
                        liff.sendMessages([
                            {
                            type:'text',
                            text:'送信失敗'
                            }
                        ])
                    } )

                    //通信が終了した場合
                    .always ( function() {
                        //LIFFを閉じる
                        liff.closeWindow();       
                    } )
            });


        })
        .catch((err) => {

        });
};
