    {/* Coupon Code */}
          <div className="border-b w-full py-4 lg:p-4">
            <Tabs aria-label="Default Tabs" style="default">
              <Tabs.Item active title="Coupon Code">
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-2 flex items-center">
                    <Label
                      htmlFor="coupon"
                      value="Enter Coupon Code"
                      className="text-lg -ml-6"
                    />
                    <Tooltip
                      content="Please enter in your coupon code before adding in any gift card or referral credits. If you do not place in the coupon code first and apply a gift card or referral credit, you will be forced to reinput the gift card and/or referral credits."
                      arrow={false}
                      className="w-48 border bg-white  text-black font-normal text-center "
                    >
                      <IoMdInformationCircleOutline className="-ml-4 xxl:text-xl" />
                    </Tooltip>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <TextInput
                      id="coupon"
                      type="text"
                      placeholder="Enter Coupon Code"
                      onChange={(e) => handleChange("coupon", e.target.value)}
                    />
                    <Button>Apply</Button>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>