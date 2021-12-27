# privacy_AI(Inspired by muzero)

## ABSTRACT:

Extensive use of services has given rise to various privacy concerns, such as the processing and selling of personal information. The proposed work addresses these concerns by developing an intelligent agent that evaluates the privacy policy of these services, which is initially trained to take actions that result in standard privacy. As the user uses the agent, it learns the user privacy behavior to take actions on behalf of the user. The proposed model uses reinforcement learning to provide an intelligent data agent that learns from standard privacy policies, and the user takes the actions.

!!!!! Still under testing(in progress)!!!!!!!!

## INTRODUCTION AND RELATED WORK:

The problem is simple: to evaluate the privacy policies of different entities to provide feedback to the entities and make users more aware of their privacy protection, ultimately empowering them to take actions with clarity about their privacy. The research about this problem boomed when suddenly privacy was the primary concern of the people. The research went in many directions mainly it can be classified into these three types: - Collecting and cleaning the privacy policies to make a dataset with annotations made by law experts, aligning different summary statements to each sentence to evaluate the policy, extracting the needed information from the given policy automatically as the algorithms got more advanced over the years, the ways of applications to this problem as also increased. In 2013 N. Sadeh and his team used natural language processing and machine learning to make a model that takes in the privacy policies and gives answers to the users' questions from the policies. They trained the model using the annotations present for each sentence and evaluated using the user's input. In 2014 Fei Liu and her team proposed a model for automatically aligning the privacy statements to the paragraphs in the policy to get the summary of the privacy issues they address. They used Hidden Markov Model to predict the alignment. In 2015 L. F. Cranor and his team published a paper in which they did an In-Depth analysis on whether they contain information relevant for users to make privacy decisions. In which they found that many policies are not fully compliant.
In 2016 Shomir Wilson and his team made a dataset of privacy policies by scraping off the internet and annotating each sentence in the dataset by recruiting two law students. They also categorized them into ten different types. They used different classic machine learning models like support vector machines and different clustering algorithms like KNN's to predict the labels for each sentence in the dataset. In 2017 Kanthashree Mysore Sathyendra and his team tried to identify whether any opt-out choices were mentioned in the policies to show to the user. They used the OPP-15 dataset created by F. Cranor and his team in 2015 to train and predict the class labels for each sentence in the dataset. They extracted features using latent Dirichlet allocation and non-negative matrix factorization. They used classic logistic regression classification.
In 2018 Jaspreet Bhatia and Travis D talked about Semantic Incompleteness in Privacy Policy in their paper analyzed 202 manually annotated statements across five privacy policies. They categorized the Semitics from these sentences according to identified roles to find any incompleteness. In 2018 Abhijith Athreya and his team used supervised and unsupervised methods to separate section titles and prose text in web documents. In 2019 Sebastian Zimmeck and his team conducted a privacy evaluation for 1,035,853 Android apps from the Google Play Store. In which they find broad evidence of potential non-compliance of regulations by these apps. Also, they extracted important information like 12.1% of apps have at least one location-related potential compliance issue. They released maps dataset and also app-350 corpus to use for further research. In 2019 Abhilasha Ravichander and his team made a model which automatically extracts related data from the given policy for the question asked by the user. They use the standard available datasets to train their models (CNN, BERT). In 2019 same authors published a paper about the Challenges in Automated Question Answering for Privacy Policies. Where they talk about taking the questions and make the experts annotate them to 5 train their model to predict. In 2020, Roger Iyengar and other co-authors extended the research on Automatic Extraction of Opt-Out Statements from Privacy Policy Text. They use NLP models to find the text's opt-out hyperlinks to show the user. These are some of the highlights of the last decade's research on this problem. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Files description:

- documentation for data : This contains files take from the OPP-115 dataset which decribe the contents in the files of the dataset.

- new_policies_collected : This contains text files of privacy policies of different companies collected manually.

- OPP-115 dataset_annotations : This contains annotations for privacy policies from OPP-115. For more info look into documentation for data.

- original_policies : Contains plain policies from OPP-115 dataset

- Pretty_print_uniquified : check the documentation for data

- vocab_dir : contains two files <br/> 
               vocab_gen : code used for collecting words from the OPP-115 dataset policies.<br/> 
               words : collected words
           
- preprocessed_data_for_opp-115 : contains preprocessed data for the model.

- preprocessing : code used for preprocessing the OPP-115 dataset.

- preprocessing_for_new_data : code to be used for new policy preprocessing.

- Privacy_research : contains the code for training the model.

- sent_temp : temporary file used to by preprocessing code.

- vocab_collection_for_new_data : contains code to collect words from new policies

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Model:          
                
   ![image](https://user-images.githubusercontent.com/54499416/145853399-784e78bb-8fe7-4a60-a590-5a655249e534.png#gh-dark-mode-only)
   
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Network:

   ![image](https://user-images.githubusercontent.com/54499416/145853649-6f80398d-5a8b-47e4-82ba-c275169595c2.png#gh-dark-mode-only)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Testing in progress!!!!!!!!!!    
    





