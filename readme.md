1. Lấy access token
- Truy cập https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed
- Ấn Ctrl F, rồi search “EAAA”, copy cả đoạn token

2. Lấy group id
- Truy cập group muốn đăng bài và copy ID trên thanh url
- Ví dụ: https://www.facebook.com/groups/861527454458605

3. Lấy content của group muốn copy
- Truy cập group muốn copy, ấn F12 rồi copy paste đoạn code sau:

const _0x155a=['261763sHygKj','download','push','scrollTo','803356JJgHMx','href','30907yTpVwp','querySelector','div[data-ad-preview=\x27message\x27]','Thời\x20gian\x20copy\x20(s):\x20','textContent','data.json','209067YHVmXn','div[role=\x27feed\x27]>div','1WANdTK','22709lTUgBM','3kQfopP','857699sQfPqx','650540uWrhUw','11gKBGuk','13YFdmnU','querySelectorAll','getAttribute','length','img.i09qtzwb.n7fi1qx3.datstx6m.pmk7jnqg.j9ispegn.kr520xx4.k4urcfbm','setAttribute'];(function(_0x51b0b7,_0x26bdae){const _0x1a2caa=_0x2d0d;while(!![]){try{const _0x34ba38=-parseInt(_0x1a2caa(0xb1))+-parseInt(_0x1a2caa(0xab))*-parseInt(_0x1a2caa(0xa6))+-parseInt(_0x1a2caa(0xa9))+parseInt(_0x1a2caa(0xa3))*parseInt(_0x1a2caa(0xa7))+-parseInt(_0x1a2caa(0xa5))*parseInt(_0x1a2caa(0xb5))+-parseInt(_0x1a2caa(0x9d))*-parseInt(_0x1a2caa(0xaa))+parseInt(_0x1a2caa(0xa8));if(_0x34ba38===_0x26bdae)break;else _0x51b0b7['push'](_0x51b0b7['shift']());}catch(_0x4f48da){_0x51b0b7['push'](_0x51b0b7['shift']());}}}(_0x155a,0x62bd3));function sleep(_0x1134cc){return new Promise(_0x167e01=>setTimeout(_0x167e01,_0x1134cc));}async function run(){const _0x4c3c98=_0x2d0d;let _0x5833bc=prompt(_0x4c3c98(0xa0));if(!_0x5833bc)return;for(let _0x22d968=0x0;_0x22d968<_0x5833bc;_0x22d968++){window[_0x4c3c98(0xb4)](0x0,_0x22d968*0x3e8),await sleep(0x3e8);}await sleep(0x3e8);let _0x5b01c2=document[_0x4c3c98(0xac)](_0x4c3c98(0xa4)),_0x393f63=[];for(let _0x483fac=0x0;_0x483fac<_0x5b01c2[_0x4c3c98(0xae)];_0x483fac++){try{let _0x3eee3f=_0x5b01c2[_0x483fac][_0x4c3c98(0x9e)](_0x4c3c98(0x9f))[_0x4c3c98(0xa1)],_0x5b3c39=_0x5b01c2[_0x483fac][_0x4c3c98(0x9e)](_0x4c3c98(0xaf))[_0x4c3c98(0xad)]('src');_0x393f63[_0x4c3c98(0xb3)]({'id':_0x483fac,'message':_0x3eee3f,'url':_0x5b3c39});}catch(_0x12e1a9){}}await sleep(0x3e8),exportToJsonFile(_0x393f63);}function _0x2d0d(_0x19812c,_0x5df6c5){_0x19812c=_0x19812c-0x9d;let _0x155a5e=_0x155a[_0x19812c];return _0x155a5e;}function exportToJsonFile(_0x229a57){const _0x33e1b6=_0x2d0d;let _0x184d9b=JSON['stringify'](_0x229a57),_0x21a4a3='data:application/json;charset=utf-8,'+encodeURIComponent(_0x184d9b),_0x4e0ddd=_0x33e1b6(0xa2),_0x55e68f=document['createElement']('a');_0x55e68f[_0x33e1b6(0xb0)](_0x33e1b6(0xb6),_0x21a4a3),_0x55e68f['setAttribute'](_0x33e1b6(0xb2),_0x4e0ddd),_0x55e68f['click']();}run();

- Mở file json vừa tải về, copy toàn bộ rồi paste vào content. Ấn chạy và thưởng thức thôi.

* Lưu ý: Bạn có thể đăng lên tất cả các nhóm đã tham gia bằng cách trỏ tới setting và click Get Group (Nhớ nhập access token trước khi click).
