JEIEvents.information(event => {
    // Добавляем информационную страницу к предмету 'kubejs:my_custom_item'
    event.addItem(['sophisticatedbackpacks:backpack', 
        'sophisticatedbackpacks:copper_backpack', 
        'sophisticatedbackpacks:iron_backpack', 
        'sophisticatedbackpacks:gold_backpack', 
        'sophisticatedbackpacks:diamond_backpack', 
        'sophisticatedbackpacks:netherite_backpack'], [
        Text.translate('descriptions.kubejs.backpacks')
    ]);
    event.addItem('create_unbreakable:irromolding', [
        Text.translate('descriptions.kubejs.sphere')
    ]);

});