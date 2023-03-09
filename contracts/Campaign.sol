// // SPDX-License-Identifier: MIT

pragma solidity >0.7.0 <=0.9.0;

contract CampaignFactory {
    address[] public deployedCampaigns;

    event campaignCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imgURI,
        uint indexed timestamp,
        string indexed category
    );

    function createCampaign(
    string memory campaignTitle, 
    uint requiredCampaignAmount, 
    string memory imgURI, 
    string memory category,
    string memory detailsURI) public
    {
        Campaign newCampaign = new Campaign(
            campaignTitle, requiredCampaignAmount, imgURI, detailsURI);

        deployedCampaigns.push(address(newCampaign));

        emit campaignCreated(
            campaignTitle, 
            requiredCampaignAmount, 
            msg.sender, 
            address(newCampaign),
            imgURI,
            block.timestamp,
            category
        );
    }
}

contract Campaign {
     string public title;
     uint public requiredAmount;
     string public image;
     string public details;
     address payable public owner;
     uint public receivedAmount;

     event donated(address indexed donor, uint indexed amount, uint indexed timestamp);

     constructor(
         string memory campaignTitle,
         uint requiredCampaignAmount,
         string memory imgURI,
         string memory detailsURI
    ) {
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imgURI;
        details = detailsURI;
        owner = payable(msg.sender);
     }

     function donate() public payable {
         require(requiredAmount > receivedAmount, "required amount fulfilled");
         owner.transfer(msg.value);
         receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp); 
     }
}
