var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
(function($)
{
    var inputText;
    var i = -1;
    $('body').on('keypress','.txtInput',function(e)
    {
          if(flag)
        {
            inputText = $('.inputPanel tr:first').text();
            flag = false;
        }
        if(inputText[i] == " ")
        {
            if((e.which || e.keyCode)==32)
                i++;
            else
                e.preventDefault();
        }
        else
        {
            e.preventDefault();
            $( '.txtInput' ).val($( '.txtInput' ).val()+inputText[i]);
            i++;
        }
    });
});
