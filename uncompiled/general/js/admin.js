//tabs
var instance = M.Tabs.init(document.querySelector('.tabs'), {});

document.addEventListener('DOMContentLoaded', function() {
    //gen.js
    const CSRFtoken = document.querySelector('#CSRFtoken');
    const btnRegister = document.querySelector('#gen_register');
    const inputRegister = document.querySelector('#gen_register_email');
     btnRegister.addEventListener("click", function() {
        btnRegister.innerHTML = 'Loading';
         $.ajax({
            type: "POST",
            url: '/admin/process.php',
            dataType: "JSON",
            timeout: (2 * 1000),
            data: {
                CSRFtoken: CSRFtoken.value,
                type: 'gen',
                user:  inputRegister.value
            },
             success: function(response) {
                if (response.status) {
                    btnRegister.innerHTML = 'Success';
                } else {
                    btnRegister.innerHTML = 'Failed';
                }
            },
             error: function() {
                btnRegister.innerHTML = 'Failed';
            }
        });
    });

    //filter
    var LightTableFilter = (function(Arr) {
        var _input;
         function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }
         function _filter(row) {
            var text = row.textContent.toLowerCase(),
                val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }
        return {
            init: function() {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);
    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

    //dropdown settings
    document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelectorAll(".dropdown-trigger-user-settings");
            M.Dropdown.init(e, {
            alignment: "right",
            coverTrigger: false
        })
    });
  });
