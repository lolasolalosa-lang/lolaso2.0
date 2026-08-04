ItemEvents.tooltip(event => {
    // Замените 'kubejs:my_item' на ID вашего предмета.
    event.add('artifacts:helium_flamingo', Text.translate('descriptions.kubejs.helium_flamingo').red());
    event.add('create_enchantment_industry:enchanting_guide', Text.translate('descriptions.kubejs.enchantment_guide').red());
    // event.add(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{lvl:1,id:mending}]}'), Text.translate('descriptions.kubejs.mending_removed').red());
});