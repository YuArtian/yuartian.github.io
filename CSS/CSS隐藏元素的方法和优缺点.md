# CSS隐藏元素的方法和优缺点
>
> 您可能不知道的CSS元素隐藏“失效”以其妙用
> <https://www.zhangxinxu.com/wordpress/2012/02/css-overflow-hidden-visibility-hidden-disabled-use/>

{ display: none; /*不占据空间，无法点击 */ }
{ visibility: hidden; /* 占据空间，无法点击 */ }
{ position: absolute; clip:rect(1px 1px 1px 1px); /* 不占据空间，无法点击 */ }
{ position: absolute; top: -999em; /* 不占据空间，无法点击 */ }
{ position: relative; top: -999em; /* 占据空间，无法点击 */ }
{ position: absolute; visibility: hidden; /* 不占据空间，无法点击 */ }
{ height: 0; overflow: hidden; /* 不占据空间，无法点击 */ }
{ opacity: 0; filter:Alpha(opacity=0); /* 占据空间，可以点击 */ }
{ position: absolute; opacity: 0; filter:Alpha(opacity=0); /* 不占据空间，可以点击 */ }
{
    zoom: 0.001;
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    /* IE6/IE7/IE9不占据空间，IE8/FireFox/Chrome/Opera占据空间。都无法点击 */
}
{
    position: absolute;
    zoom: 0.001;
    -moz-transform: scale(0);
    -webkit-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    /* 不占据空间，无法点击*/
}
