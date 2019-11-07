app.directive('numbersOnly', function () {

    return {

        require: 'ngModel',

        link: function (scope, element, attr, ngModelCtrl) {

            function fromUser(text) {

                if (text) {

                    var transformedInput = text.replace(/[^0-9]/g, '');



                    if (transformedInput !== text) {

                        ngModelCtrl.$setViewValue(transformedInput);

                        ngModelCtrl.$render();

                    }

                    return transformedInput;

                }

                return undefined;

            }

            ngModelCtrl.$parsers.push(fromUser);

        }

    };

});
app.directive('dateedit', function () {



    app.filter('etim22', function () {

        return function (input, stt) {


            input = input.toString();

            var dateTime1 = new Date("2016-10-20 " + input);
            var dateTime = new Date(dateTime1.getTime() - dateTime1.getTimezoneOffset() * 60000);
            var temp = dateTime.toString().split(' ');

            input = temp[4];
            var minute = temp[4].split(":");

            console.log(input);
            if (input == "00:00:00") {

                // debugger;
                stt = "12:00 AM";


            } else {


                var temp3 = parseInt(input);

                console.log(temp3);
                if (temp3 > 12) {


                    var stt = temp3 - 12;



                    stt = stt + ":" + minute[1] + " PM"




                }

                else {

                    if (temp3 == 12) {



                        stt = "12:00 PM"

                    }
                    else {


                        stt = temp3 + ":" + minute[1] + " AM";


                    }


                }


            }
            return stt;



        }

    });


});
app.directive('scrolly', function () {

    return {

        restrict: 'A',

        link: function (scope, element, attrs) {

            var raw = element[0];





            element.bind('scroll', function () {



                if (raw.scrollTop == 0) {





                    scope.chatFun(scope._tredid, scope.c_patfname, scope.c_patlname, scope.c_patpic);



                    raw.scrollTop = raw.scrollTop + raw.offsetHeight;

                }

            });

        }

    };

});
app.directive('validPasswordC', function () {

    return {

        require: 'ngModel',

        link: function (scope, elm, attrs, ctrl) {

            ctrl.$parsers.unshift(function (viewValue, $scope) {

                var noMatch = viewValue != scope.myForm.newpass.$viewValue

                ctrl.$setValidity('noMatch', !noMatch);



            })

        }

    }

})
app.directive('mydatepicker', function () {

    return {

        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {


            element.datepicker({

                dateFormat: 'yy-mm-dd',
                yearRange: '1930:+nn',
                maxDate: '0',
                changeMonth: true,
                changeYear: true,
                onSelect: function (date) {

                    scope.date = date;
                    scope.$watch('date', function (value) {


                        if (ngModelCtrl.$viewValue != value) {

                            ngModelCtrl.$setViewValue(value);

                        }

                    });
                    scope.$apply();

                }

            });

        }

    };


});
app.directive('mydatepicker2nd', function () {

    return {

        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {


            element.datepicker({

                dateFormat: 'yy-mm-dd',
                minDate: '0',
                changeMonth: true,
                changeYear: true,
                onSelect: function (date) {

                    scope.date = date;
                    scope.$watch('date', function (value) {


                        if (ngModelCtrl.$viewValue != value) {

                            ngModelCtrl.$setViewValue(value);

                        }

                    });
                    scope.$apply();

                }

            });

        }

    };


});
app.directive('mydatepickerProfile', function () {

    return {

        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {


            element.datepicker({

                dateFormat: 'yy-mm-dd',
                yearRange: '1930:+nn',
                maxDate: '0',
                changeMonth: true,
                changeYear: true,
                onSelect: function (date) {

                    scope.date = date;
                    scope.$watch('date', function (value) {


                        if (ngModelCtrl.$viewValue != value) {

                            ngModelCtrl.$setViewValue(value);

                        }

                    });
                    scope.$apply();

                }

            });

        }

    };


});
app.directive('alnumOnly', function () {

    return {

        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {

            function fromUser(text) {

                if (text) {

                    var transformedInput = text.replace(/[^a-zA-Z0-9]*$/g, '');

                    if (transformedInput !== text) {

                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();

                    }
                    return transformedInput;

                }
                return undefined;

            }
            ngModelCtrl.$parsers.push(fromUser);

        }

    };

});
app.directive('alpOnly', function () {

    return {

        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {

            function fromUser(text) {

                if (text) {

                    var transformedInput = text.replace(/[^a-zA-Z]*$/g, '');

                    if (transformedInput !== text) {

                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();

                    }
                    return transformedInput;

                }
                return undefined;

            }
            ngModelCtrl.$parsers.push(fromUser);

        }

    };

});
app.directive('file', function () {

    return {

        restrict: 'AE',
        scope: {

            file: '@',


        },
        link: function (scope, el, attrs) {

            el.bind('change', function (event) {
                // upload();
                var files = event.target.files;
                var file = files[0];
                scope.file = file;
                scope.$parent.file = file;

                scope.$apply();


            });

        }

    };

});
app.directive('myUpload', [function () {


    return {

        restrict: 'A',
        link: function (scope, elem, attrs) {

            var reader = new FileReader();
            reader.onload = function (e) {


                scope.image = e.target.result;
                scope.$apply();
                scope.upload();

            }

            elem.on('change', function () {

                reader.readAsDataURL(elem[0].files[0]);

            });

        }

    };



}]);
app.directive('restrictInput', [function () {



    return {

        restrict: 'A',

        link: function (scope, element, attrs) {

            var ele = element[0];

            var regex = RegExp(attrs.restrictInput);

            var value = ele.value;



            ele.addEventListener('keyup', function (e) {

                if (regex.test(ele.value)) {

                    value = ele.value;

                } else {

                    ele.value = value;

                }

            });

        }

    };

}]);
app.directive('imgUploadProfile', ['$rootScope', function (rootScope) {

    return {

        restrict: 'AE',
        link: function (scope, elem, attrs) {
            var canvas = document.createElement("canvas");

            var extensions = 'jpeg ,jpg, png, gif, bmp ,JPEG, JPG, PNG, GIF, BMP';

            elem.on('change', function () {

                reader.readAsDataURL(elem[0].files[0]);

                var filename = elem[0].files[0].name;



                var extensionlist = filename.split('.');

                var extension = extensionlist[extensionlist.length - 1];

                console.log('extension', extensions.indexOf(extension))

                if (extensions.indexOf(extension) == -1) {

                    alert("File extension , Only 'jpeg', 'jpg', 'png', 'gif', 'bmp' are allowed.");

                    //window.location.reload();

                }

                else {

                    scope.file = elem[0].files[0];



                    scope.imageName = filename;

                    console.log('scope.imageName', scope.imageName)

                }



            });



            var reader = new FileReader();

            reader.onload = function (e) {

                var bas64 = e.target.result.split(",").pop();



                scope.imagebaseProfile = bas64

                scope.saveimageP(scope.imagebaseProfile);

                scope.$apply();





            }



        },





    }

}]);
app.directive('imgUpload', ['$rootScope', function (rootScope) {

    return {

        restrict: 'AE',



        link: function (scope, elem, attrs) {



            var canvas = document.createElement("canvas");

            var extensions = 'jpeg ,jpg, png, gif, bmp ,JPEG, JPG, PNG, GIF, BMP';

            elem.on('change', function () {

                reader.readAsDataURL(elem[0].files[0]);

                var filename = elem[0].files[0].name;



                var extensionlist = filename.split('.');

                var extension = extensionlist[extensionlist.length - 1];

                console.log('extension', extensions.indexOf(extension))

                if (extensions.indexOf(extension) == -1) {

                    alert("File extension , Only 'jpeg', 'jpg', 'png', 'gif', 'bmp' are allowed.");

                    window.location.reload();

                }

                else {

                    scope.file = elem[0].files[0];



                    scope.imageName = filename;

                    console.log('scope.imageName', scope.imageName)

                }



            });



            var reader = new FileReader();

            reader.onload = function (e) {

                var bas64 = e.target.result.split(",").pop();



                scope.imagebase = bas64

                console.log('baseconverted', scope.imagebase)



                scope.saveimage(scope.imagebase);

                scope.$apply();





            }



        },





    }

}]);
app.directive("progressbar", function () {

    return {

        restrict: "A",
        scope: {

            total: "=",
            current: "="

        },
        link: function (scope, element) {


            scope.$watch("current", function (value) {

                element.css("width", scope.current / scope.total * 100 + "%");

            });
            scope.$watch("total", function (value) {

                element.css("width", scope.current / scope.total * 100 + "%");

            })

        }

    };

});
app.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file) {
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })
        .success(function () {
        })
        .error(function () {
        });
    }
}]);
app.directive("progressbar", function () {
    return {
        restrict: "A",
        scope: {
            total: "=",
            current: "="
        },
        link: function (scope, element) {

            scope.$watch("current", function (value) {
                element.css("width", scope.current / scope.total * 100 + "%");
            });
            scope.$watch("total", function (value) {
                element.css("width", scope.current / scope.total * 100 + "%");
            })
        }
    };
});
app.directive('fileUpload', ['$rootScope', function (rootScope) {
   
    return {
        restrict: 'AE',
        link: function (scope, elem, attrs) {
            var canvas = document.createElement("canvas");
            var extensions = 'jpeg ,jpg, png, gif, bmp ,JPEG, JPG, PNG, GIF, BMP, xlsx,xls';
            elem.on('change', function () {
                reader.readAsDataURL(elem[0].files[0]);
                var filename = elem[0].files[0].name;
             
                var extensionlist = filename.split('.');
                var extension = extensionlist[extensionlist.length - 1];
                console.log('extension', extensions.indexOf(extension))
                if (extensions.indexOf(extension) == -1) {
                    alert("File extension , Only 'jpeg', 'jpg', 'png', 'gif', 'bmp', xlsx are allowed.");
                    // window.location.reload();
                }
                else {
                    scope.file = elem[0].files[0];
                    scope.imageName = filename;
                    console.log('scope.imageName', scope.imageName)
                }
            });

            var reader = new FileReader();
            reader.onload = function (e) {
                var bas64 = e.target.result.split(",").pop();
                scope.imagebaseProfile = bas64
                console.log("imagebaseProfile", scope.imagebaseProfile)
                scope.uploadFile(scope.imagebaseProfile);
                scope.$apply();
            }
        },
    }
}]);