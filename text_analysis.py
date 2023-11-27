
import os
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient
from dotenv import load_dotenv

load_dotenv()


endpoint = os.environ["AZURE_LANGUAGE_ENDPOINT"]
key = os.environ["AZURE_LANGUAGE_KEY"]

text  = [
        """Parker Doe has repaid all of their loans as of 2020-04-25.
        Their SSN is 859-98-0987. To contact them, use their phone number
        555-555-5555. They are originally from Brazil and have Brazilian CPF number 998.214.865-68"""
    ]
    # [
    #     """Parker Doe ha pagado todos sus préstamos a partir del 2020-04-25.
    #      Su SSN es 859-98-0987. Para contactarlos, use su número de teléfono
    #      555-555-5555. Son originarios de Brasil y tienen número de CPF brasileño 998.214.865-68"""
    # ]
def sample_recognize_pii_entities(text):
    


    text_analytics_client = TextAnalyticsClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )
    

    result = text_analytics_client.recognize_pii_entities(text)
    docs = [doc for doc in result if not doc.is_error]

    for idx, doc in enumerate(docs):
        for entity in doc.entities:
            print("...Entity '{}' with category '{}' got redacted".format(
                entity.text, entity.category
            ))


    # social_security_numbers = []
    # for doc in docs:
    #     for entity in doc.entities:
    #         if entity.category == 'USSocialSecurityNumber' and entity.confidence_score >= 0.6:
    #             social_security_numbers.append(entity.text)

    # print("We have extracted the following SSNs as well: '{}'".format(
    #     "', '".join(social_security_numbers)
    # ))


if __name__ == '__main__':
    sample_recognize_pii_entities(text)