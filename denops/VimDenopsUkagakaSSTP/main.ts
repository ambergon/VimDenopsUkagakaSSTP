







import type { Entrypoint } from "https://deno.land/x/denops_std@v6.5.0/mod.ts";
import { assert, is } from "https://deno.land/x/unknownutil@v3.18.1/mod.ts";

export const main: Entrypoint = (denops) => {
    // Overwrite `dispatcher` to define APIs.
    //
    // APIs are invokable from Vim script through `denops#request()` or `denops#notify()`.
    // Refer to `:help denops#request()` or `:help denops#notify()` for more details.
    denops.dispatcher = {
        // 初期化関数
        async init( GhostName ) {
            console.log( GhostName );
            
            // プラグイン名が格納される。
            const { name } = denops;
            await denops.cmd(
                // `command! -nargs=? DenopsHello call denops#request('プラグイン名(読み込むフォルダ名)', '呼び出す関数名', [<q-args>])`,
                `command! -nargs=? DenopsSSTP call denops#request('${name}', 'Send', [<q-args>])`,
            );
        },

        // Vimから呼び出したい関数を設定
        hello(name) {
            assert(name, is.String);
            // 引数が空ならDenopsが入る。
            return `Hello, ${name || "Denops"}!`;
        },

        Send( SakuraScript ){
            console.log( "MANA" );
            var Ghost = "MANA"
            //var Ghost = "Ghostのお名前 sakura or kero "
            var Sender = "Mery"
            var sstpText =        "SEND SSTP/1.4\r\n";
            sstpText = sstpText + "Content-Type: text/plain"                  + "\r\n"; 
            sstpText = sstpText + "Sender      : " + Sender                   + "\r\n"; 
            sstpText = sstpText + "Option      : nobreak"                     + "\r\n"; 
            sstpText = sstpText + "Charset     : UTF-8"                       + "\r\n"; 
            sstpText = sstpText + "IfGhost     : " + Ghost                    + "\r\n"; 
            //sstpText = sstpText + "Event       : OnText"                      + "\r\n"; 
            //sstpText = sstpText + "Reference0  : " + Sender                   + "\r\n"; 
            //sstpText = sstpText + "Reference1  : " + SakuraScript             + "\r\n"; 
            sstpText = sstpText + "Script      : " + SakuraScript             + "\r\n"; 
            sstpText = sstpText + "\r\n"; 

            const url = "http://localhost:9801/api/sstp/v1";
            var dataSSTP = {}
            dataSSTP[ "method" ]    = "POST";
            dataSSTP[ "body" ]      = sstpText;
            //var promise_SSTP = (resolve, reject) => { 
            fetch( url , dataSSTP );
            //} 
            //return new Promise(promise_SSTP); 
        } ,
    };
};

// Send( "あいうえお" );




















