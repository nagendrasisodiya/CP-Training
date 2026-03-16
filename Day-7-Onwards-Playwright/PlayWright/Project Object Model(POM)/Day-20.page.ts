class amazon{
    searchField:string
    searchBTN:any
    checkBOX:any
    product:any
    page:any
    page2:any
    dropDown:any
    quantity:any
    add:any
    constructor(page:any) {
        this.page=page
        this.searchField=page.locator('//input[@id="twotabsearchtextbox"]')
        this.searchBTN=page.locator('//input[@id="nav-search-submit-button"]')
        this.checkBOX=page.locator('//span[@class="a-size-base a-color-base" and .="10 GB & Above"]')
        this.product=page.locator('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[4]')
        this.dropDown= page.locator('//span[@class= "a-dropdown-label" and .= "Quantity:"]')
        this.quantity = page.locator('//div[@class="a-popover-inner"]/descendant::ul/li/a[@id="quantity_2"]')
        this.add=page.locator('(//input[@id="add-to-cart-button"])[2]')
    }
    async addToCart( product:string){
        await this.searchField.fill(product)
        await this.searchBTN.click()
        await this.page.waitForTimeout(2000)
        await this.checkBOX.click()
        const[newpage] =await Promise.all([
            this.page.waitForEvent("popup"),
            this.product.click()
        ]);
        this.page2=newpage
        let amz=new amazon(this.page2)
        await amz.dropDown.click()
        await amz.quantity.click()
        await amz.add.click()
        await amz.page.waitForTimeout(5000)
    }

}

export default amazon