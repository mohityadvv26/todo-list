// (function($) {
//     'use strict';
//     $(function() {
//       var todoListItem = $('.todo-list');
//       var todoListInput = $('.todo-list-input');
//       $('.todo-list-add-btn').on("click", function(event) {
//         event.preventDefault();
  
//         var item = $(this).prevAll('.todo-list-input').val();
  
//         if (item) {
//           todoListItem.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
//           todoListInput.val("");
//         }
  
//       });
  
//       todoListItem.on('change', '.checkbox', function() {
//         if ($(this).attr('checked')) {
//           $(this).removeAttr('checked');
//         } else {
//           $(this).attr('checked', 'checked');
//         }
  
//         $(this).closest("li").toggleClass('completed');
  
//       });
  
//       todoListItem.on('click', '.remove', function() {
//         $(this).parent().remove();
//       });
  
//     });
//   })(jQuery);
$(document).ready(function () {
    $(".add").on("click", function () {
        var todoItem = $(".todo-list-input").val();
        if (todoItem) {
            $(".todo-list").prepend('<li><div class="form-check"><label class="form-check-label"><input class="checkbox" type="checkbox">' + todoItem + '<i class="input-helper"></i></label></div><i class="remove mdi mdi-close-circle-outline"></i></li>');
            $(".todo-list-input").val("");
        }
    });

    $(document).on("click", ".checkbox", function () {
        if ($(this).prop("checked")) {
            $(this).closest("li").addClass("completed");
        } else {
            $(this).closest("li").removeClass("completed");
        }
    });

    $(document).on("click", ".remove", function () {
        $(this).closest("li").remove();
    });
});
