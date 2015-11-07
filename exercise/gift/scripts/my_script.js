    //$("div").click(function() {
    //    alert("AAA");
    //})
    $(document).ready(function() {
        $(".guess_box").click(function() {
            $(".guess_box p").remove();
            var discount = Math.floor((Math.random() * 5) + 5);
            var discount_msg = "<p>你獲得的折扣是" + discount + "%</p>";
            //$(".guess_box").append(discount_msg);
            $(this).append(discount_msg);
            //alert(discount_msg);
            $(".guess_box").each(function() {
                $(this).unbind("click");
            })


        });

    });
