let listInventory = "//div[@class='inventory_item']"
let inventoryContainer = "//div[@class='inventory_container']"

class InventoryPage {
    get listItem() {
        return $$(listInventory)
    }

    get container() {
        return $(inventoryContainer)
    }

    async getListItemLength() {
        const lengthItems = await this.listItem.length
        return lengthItems
    }


    async buyRandomTwoItems() {
        const lengthOfList = await this.getListItemLength()
        const firstIndex = Math.floor(Math.random() * lengthOfList)
        let secondIndex = Math.floor(Math.random() * lengthOfList)
        while (secondIndex === firstIndex) {
            secondIndex = Math.floor(Math.random() * lengthOfList)
        }
        console.log(firstIndex);
        console.log(secondIndex);

        const firstItemButton = await $(`//div[@class='inventory_item'][${firstIndex + 1}]//button`);
        const secondItemButton = await $(`//div[@class='inventory_item'][${secondIndex + 1}]//button`);

        await firstItemButton.click();
        await secondItemButton.click();
    }
}

export default new InventoryPage();