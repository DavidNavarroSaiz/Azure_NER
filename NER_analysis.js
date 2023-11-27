const {
    TextAnalysisClient,
    AzureKeyCredential,
    KnownPiiEntityDomain,
    KnownPiiEntityCategory,
  } = require("@azure/ai-language-text");
  
  // Load the .env file if it exists
  require("dotenv").config();
  
  async function main() {
  
    // You will need to set these environment variables or edit the following values
    // const endpoint = "https://elsolai.cognitiveservices.azure.com/";
    // const apiKey = "75b95b13efb14104aad6e855abdf13a4";
    const endpoint = process.env.AZURE_LANGUAGE_ENDPOINT;
    const apiKey = process.env.AZURE_LANGUAGE_KEY;
    const client = new TextAnalysisClient(endpoint, new AzureKeyCredential(apiKey));
  
    const documents =  [
        "Parker Doe has repaid all of their loans as of 2020-04-25.\
        Their SSN is 859-98-0987. To contact them, use their phone number\
        555-555-5555. They are originally from Brazil and have Brazilian CPF number 998.214.865-68"
    ];
    // [
    //      """Parker Doe ha pagado todos sus préstamos a partir del 2020-04-25.
    //      Su SSN es 859-98-0987. Para contactarlos, use su número de teléfono
    //       555-555-5555. Son originarios de Brasil y tienen número de CPF brasileño 998.214.865-68"""
    // ]
    const [result] = await client.analyze("PiiEntityRecognition", documents, "en", {
    //   domainFilter: KnownPiiEntityDomain.Phi,
    //   categoriesFilter: [
    //     KnownPiiEntityCategory.PhoneNumber,
    //     KnownPiiEntityCategory.USSocialSecurityNumber,      ],
    });
  
    if (!result.error) {
    //   console.log(`Redacted text: "${result.redactedText}"`);
      console.log("Pii Entities: ");
      for (const entity of result.entities) {
        console.log(`\t- "${entity.text}" of type ${entity.category}`);
      }
    }
  }
  
  main().catch((err) => {
    console.error("The sample encountered an error:", err);
  });
  
  module.exports = { main };