












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
    " autocmd User DenopsPluginPost:VimDenopsUkagakaSSTP call denops#notify( 'VimDenopsUkagakaSSTP' , 'init', [] )
    if !exists( 'g:VimDenopsUkagakaSSTP_Ghost' )
        let g:VimDenopsUkagakaSSTP_Ghost = 'MANA'
    endif
    autocmd User DenopsPluginPost:VimDenopsUkagakaSSTP call denops#notify( 'VimDenopsUkagakaSSTP' , 'init', [ g:VimDenopsUkagakaSSTP_Ghost ] )
augroup END































