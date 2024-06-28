













" VimDenopsUkagakaSSTP
" Version: 0.0.1
" Author: 
" License: 

if exists('g:loaded_VimDenopsUkagakaSSTP')
  finish
endif
let g:loaded_VimDenopsUkagakaSSTP = 1



augroup VimDenopsUkagakaSSTP
    autocmd!
    " User は自動実行されることがないコマンド。
    " Denops側で処理してくれるのだろう。
    autocmd User DenopsPluginPost:VimDenopsUkagakaSSTP call denops#notify( 'VimDenopsUkagakaSSTP' , 'init', [ "MANA" ] )
augroup END































