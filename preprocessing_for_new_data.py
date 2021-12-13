import os
import csv
import ast
import re
import nltk
import json
from itertools import count
import os
import csv
import ast
import pandas as pd
nltk.download('stopwords')
nltk.download('punkt')
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
stemmer = PorterStemmer()
stopwords_english = stopwords.words('english')

def process_str(str):
    str = re.sub(r'\$\w*', '', str)
    str = re.sub(r'^RT[\s]+', '', str)
    str= re.sub(r'https?:\/\/.*[\r\n]*', '', str)
    str = re.sub(r'#', '', str)
    tokens = nltk.word_tokenize(str)
    sen_clean = []
    for word in tokens:
        if (word not in stopwords_english): 
            stem_word = stemmer.stem(word) 
            sen_clean.append(stem_word.lower())
    return sen_clean

from itertools import count
import os
import csv
import ast
import pandas as pd

directory = r'D:\OPP-115_v1_0\dp\new_policies'

def length_filter(tok_lis):
    if len(list(tok_lis)) >= 2048:
        return tok_lis[:2048]
    else:
        d = 2048 - len(tok_lis)
        arr= [0 for i in range(d)]
        return tok_lis+arr

def tokenizer(str_lis):
    with open(r'D:\OPP-115_v1_0\dp\vocab_dir\words.txt') as words:
        data = json.load(words)
        
        tokens = [data[word] if word in data else 0 for word in str_lis]
        tokens = length_filter(tokens)
        return tokens
    
def calculate_goal_value(lis_val):
    
    memory = ['First Party Collection/Use',
              'Third Party Sharing/Collection',
              'User Choice/Control',
              'User Access, Edit and Deletion',
              'Data Retention',
              'Data Security',
              'Policy Change',
              'Do Not Track',
              'International and Specific Audiences',
              'other'
              ]
    value = 0
    i =0
    while(lis_val[i]!= 'done'):
          sub_val = cal_val(lis_val[i])
          value += sub_val
          i = i +1
    
    return value

def cal_val(str):
    return {
        'Does': 0,
        'Does Not':1,
        'Explicit':1,
        'Implicit':0,
        'Unspecified':0,
        'Collect on website':0,
        'Collect in mobile app':0,
        'Collect on mobile app':0,
        'Collect in mobile website':0,
        'Collect on mobile website':0,
        'Track user on other websites':1,
        'Collect from user on other websites':0,
        'Receive from other parts of company/affiliates':0,
        'Receive from other service/third-party (unnamed)':0,
        'Receive from other service/third-party (named)':1,
        'Other':1,
        'Unspecified':0,
        'Identifiable':0,
        'Aggregated or anonymized':1,
        'Other':0,
        'Unspecified':1,
        'Financial':0,
        'Health':0,
        'Contact':0,
        'Location':0,
        'Demographic':0,
        'Personal identifier':0,
        'User online activities':1,
        'User profile':0,
        'User Profile':0,
        'Social media data':1,
        'IP address and device IDs':0,
        'Cookies and tracking elements':1,
        'Computer information':1,
        'Survey data':1,
        'Generic personal information':1,
        'Other':0,
        'Unspecified':0,
        'Basic service/feature':1,
        'Additional service/feature':1,
        'Advertising':1,
        'Marketing':0,
        'Analytics/Research':1,
        'Personalization/Customization':1,
        'Service Operation and Security':1,
        'Service operation and security':1,
        'Legal requirement':1,
        'Merger/Acquisition':0,
        'Other':0,
        'User without account':1,
        'User with account':1,
        'Other':0,
        'Dont use service/feature':0,
        'Opt-in':1,
        'Opt-out link':1,
        'Opt-out':1,
        'Opt-out via contacting company':1,
        'First-party privacy controls':1,
        'Third-party privacy controls':1,
        'Browser/device privacy controls':1,
        'Collection':0,
        'Use':0,
        'Both':1,
        'Unnamed third party':0,
        'Named third party':1,
        'Other part of company/affiliate':1,
        'Other users':0,
        'Public':0,
        'Receive/Shared with':0,
        'Collect on first party website/app':1,
        'Track on first party website/app':1,
        'See':0,
        'Identifiable':0,
        'Aggregated or anonymized':1,
        'First party use':1,
        'Third party sharing/collection':0,
        'Third party use':0,
        'View':1,
        'Export':1,
        'Edit information':1,
        'Deactivate account':1,
        'Delete account (partial)':1,
        'Delete account (full)':1,
        'User account data':1,
        'Transactional data':0,
        'Profile data':0,
        'Other data about user':1,
        'Indefinitely':0,
        'Limited':0,
        'Stated Period':1,
        'Perform service':1,
        'Secure data transfer':1,
        'Secure user authentication':1,
        'Secure data storage':1,
        'Data access limitation':0,
        'Privacy training':1,
        'Privacy review/audit':1,
        'Privacy/Security program':1,
        'Generic':1,
        'Non-privacy relevant change':1,
        'Privacy relevant change':1,
        'In case of merger or acquisition':0,
        'No notification':0,
        'General notice in privacy policy':1,
        'General notice on website':1,
        'Personal notice':1,
        'Not mentioned':0,
        'Honored':1,
        'Not honored':0,
        'Mentioned, but unclear if honored':0,
        'Californians':1,
        'Europeans':1,
        'Citizens from other countries':1,
        'Children':1,
        'Introductory/Generic':1,
        'Practice not covered':0,
        'Privacy contact information':1,
        'not-selected':0,
        'User participation':1,
        'None':0,
        'First party collection':0
    }[str]

final_list = []
sent_list = []

def main():
        tokens_temp = []
        for filename in os.listdir(directory):
            with open(os.path.join(directory, filename)) as file:
                for text in file:
                    sent_list.append(text)
                for sen in sent_list:
                    tokens_temp= tokens_temp+ process_str(sen)
                print((tokenizer(tokens_temp)))
                final_list.append((tokenizer(tokens_temp)))
        df = pd.DataFrame(final_list)
        df.to_csv('tok_dataf.csv', index = False)

if __name__ == '__main__':
    main()