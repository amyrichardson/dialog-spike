myApp.controller('DialogController', function($scope, $mdDialog, $mdToast) {
    console.log('Dialog controller loaded');
    let alert = 'You earned a new achievement for finishing your first book that takes place in Asia!'
    let alert2 = 'You earned a new achievement for finishing your first book that takes place in Europe!'

    let books = 0;

    const self = this;

    self.markComplete = function(ev) {
        books++;
        console.log('books:', books);
        self.checkAlert(ev);
    }

    self.checkAlert = function(ev){
        console.log('checking', books);
        
    if(books === 1) {
        console.log('books');
        $scope.showAlert(ev);
    }
    if(books === 2 ){
        console.log('2 books');
        $scope.showAnotherAlert(ev);
    }
}  
    
    $scope.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Congratulations!')
                .textContent(alert)
                .ariaLabel('Dialog Spike')
                .ok('Wander on.')
                .targetEvent(ev)
        );
    } 

    $scope.showAnotherAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Congratulations!')
                .textContent(alert2)
                .ariaLabel('Dialog Spike')
                .ok('Wander on.')
                .targetEvent(ev)
        );
    } 


    $scope.showToast = function() {
        console.log('TOAST');
        
        $mdToast.show(
          $mdToast.simple()
            .textContent('Simple Toast!')
            .position('top right')
            .hideDelay(3000)
        );
      };
});