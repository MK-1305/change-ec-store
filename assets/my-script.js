// DOMの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.querySelector('.cart__checkout-button');
    const cartCheck = document.getElementById('cart_check');

    // cart__checkクラスを持つdiv要素が存在するか確認
    if (document.querySelector('div.cart__check')) {
        checkoutButton.disabled = true;
    }

    // チェックボックスのクリックイベントリスナーを追加
    cartCheck.addEventListener('click', function() {
        if (!this.checked) {
            checkoutButton.disabled = true;
        } else {
            checkoutButton.disabled = false;
        }
    });
});