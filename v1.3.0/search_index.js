var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TaijaPlotting","category":"page"},{"location":"#TaijaPlotting","page":"Home","title":"TaijaPlotting","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TaijaPlotting.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TaijaPlotting]","category":"page"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, ConformalPrediction.ConformalInterval, Any, Any, Any}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(\n    conf_model::ConformalInterval,\n    fitresult,\n    X,\n    y;\n    input_var=nothing,\n    zoom=-0.5,\n    train_lab=nothing,\n    test_lab=nothing,\n)\n\nA Plots.jl recipe that can be used to visualize the conformal predictions of a fitted conformal regressor. Data (X,y) are plotted as dots and overlaid with predictions intervals. y is plotted on the vertical axis against a single variable X on the horizontal axis. A shaded area indicates the prediction interval. The line in the center of the interval is the midpoint of the interval and can be interpreted as the point estimate of the conformal regressor. In case X is multi-dimensional, input_var can be used to specify the input variable of interest that will be used for the horizontal axis. If unspecified, the first variable will be plotting by default.\n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, ConformalPrediction.ConformalModel, Any, Any}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(\n    conf_model::ConformalModel,\n    fitresult,\n    X\n)\n\nA Plots.jl recipe that can be used to visualize the set size distribution of a conformal predictor. In the regression case, prediction interval widths are stratified into discrete bins. It can be useful to plot the distribution of set sizes in order to visually asses how adaptive a conformal predictor is. For more adaptive predictors the distribution of set sizes is typically spread out more widely, which reflects that “the procedure is effectively distinguishing between easy and hard inputs”. This is desirable: when for a given sample it is difficult to make predictions, this should be reflected in the set size (or interval width in the regression case). Since ‘difficult’ lies on some spectrum that ranges from ‘very easy’ to ‘very difficult’ the set size should vary across the spectrum of ‘empty set’ to ‘all labels included’.\n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, ConformalPrediction.ConformalProbabilisticSet, Any, Any, Any}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(\n    conf_model::ConformalProbabilisticSet,\n    fitresult,\n    X,\n    y;\n    input_var=nothing,\n    target=nothing,\n    ntest=50,\n    zoom=-1,\n    plot_set_size=false,\n    plot_classification_loss=false,\n    plot_set_loss=false,\n    temp=0.1,\n    κ=0,\n    loss_matrix=UniformScaling(1.0),\n)\n\nA Plots.jl recipe that can be used to visualize the conformal predictions of a fitted conformal classifier.\n\nTwo Dimensional Inputs\n\nData (X,y) are plotted as dots and overlaid with predictions sets. y is used to indicate the ground-truth labels of samples by colour. Samples are visualized in a two-dimensional feature space, so it is expected that X in mathcalR^2. By default, a contour is used to visualize the softmax output of the conformal classifier for the target label, where target indicates can be used to define the index of the target label. Transparent regions indicate that the prediction set does not include the target label. \n\nTarget\n\nIn the binary case, target defaults to 2, indexing the second label: assuming the labels are [0,1] then the softmax output for 1 is shown. In the multi-class cases, target defaults to the first class: for example, if the labels are [\"🐶\", \"🐱\", \"🐭\"] (in that order) then the contour indicates the softmax output for \"🐶\".\n\nSet Size\n\nIf plot_set_size is set to true, then the contour instead visualises the the set size.\n\nUnivariate and Higher Dimensional Inputs\n\nIn the case of univariate inputs or higher dimensional inputs, a stacked area plot is created: in particular, this method plots the softmax output(s) contained the the conformal predictions set on the vertical axis against an input variable X on the horizontal axis. In the case of multiple input variables, the input_var argument can be used to specify the desired input variable.\n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, CounterfactualExplanations.AbstractModel, CounterfactualExplanations.DataPreprocessing.CounterfactualData}","page":"Home","title":"RecipesBase.apply_recipe","text":"function plot(\n    M::AbstractFittedModel,\n    data::CounterfactualData;\n    target = nothing,\n    length_out = 100,\n    zoom = -0.1,\n    dim_red = :pca,\n    plot_loss = false,\n    loss_fun = nothing,\n)\n\nCalling Plots.plot on a AbstractFittedModel will plot the model's predictions as a contour. The target argument can be used to plot the predictions for a specific target variable. The length_out argument can be used to control the number of points used to plot the contour. The zoom argument can be used to control the zoom of the plot. The dim_red argument can be used to control the method used to reduce the dimensionality of the data if it has more than two features. \n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, CounterfactualExplanations.CounterfactualExplanation}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(\n    ce::CounterfactualExplanation;\n    target=nothing,\n    length_out=100,\n    zoom=-0.1,\n    dim_red=:pca,\n    plot_loss=false,\n    loss_fun=nothing,\n    plot_up_to = nothing,\n    n_points = nothing,\n)\n\nCalling Plots.plot on a CounterfactualExplanation object will plot the training data (scatters), model predictions for the specified target (contour) and the counterfactual path (scatter).\n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, CounterfactualExplanations.DataPreprocessing.CounterfactualData}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(data::CounterfactualData; dim_red = :pca)\n\nCalling Plots.plot on a data::CounterfactualData object will generate a scatter plot of the data.\n\n\n\n\n\n","category":"method"},{"location":"#RecipesBase.apply_recipe-Tuple{AbstractDict{Symbol, Any}, LaplaceRedux.Laplace, AbstractArray, AbstractArray}","page":"Home","title":"RecipesBase.apply_recipe","text":"plot(\n    la::Laplace,\n    X::AbstractArray,\n    y::AbstractArray;\n    link_approx=:probit,\n    target=nothing,\n    length_out=50,\n    zoom=-1,\n)\n\nCalling Plots.plot on a Laplace object will plot the posterior predictive distribution and the training data.\n\n\n\n\n\n","category":"method"},{"location":"#TaijaPlotting.animate_path","page":"Home","title":"TaijaPlotting.animate_path","text":"animate_path(ce::CounterfactualExplanation, path=tempdir(); plot_proba::Bool=false, kwargs...)\n\nReturns and animation of the counterfactual path.\n\nExamples\n\n# Search:\ngenerator = GenericGenerator()\nce = generate_counterfactual(x, target, counterfactual_data, M, generator)\n\nanimate_path(ce)\n\n\n\n\n\n","category":"function"},{"location":"#TaijaPlotting.calibration_plot-Tuple{LaplaceRedux.Laplace, Any, Any}","page":"Home","title":"TaijaPlotting.calibration_plot","text":"calibration_plot(y_cal, samp_distr, n_bins)\n\nThis plot displays the true frequency of points in each confidence interval relative to the predicted fraction of points in that interval. The intervals are taken in step of 0.05 quantiles.\n\nInputs\n\nla::Laplace – the laplace model to use.\nY_cal – a vector of  true values y_t.\nsamp_distr – an array of sampled distributions F(xt) corresponding to the yt stacked column-wise.\nn_bins – numbers of bins to use.\n\n\n\n\n\n","category":"method"},{"location":"#TaijaPlotting.embed_path-Tuple{CounterfactualExplanations.CounterfactualExplanation}","page":"Home","title":"TaijaPlotting.embed_path","text":"embed_path(ce::CounterfactualExplanation)\n\nHelper function that embeds path into two dimensions for plotting.\n\n\n\n\n\n","category":"method"},{"location":"#TaijaPlotting.generate_lims-NTuple{5, Any}","page":"Home","title":"TaijaPlotting.generate_lims","text":"generate_lims(x1, x2, xlims, ylims)\n\nSmall helper function then generates the xlims and ylims for the plot.\n\n\n\n\n\n","category":"method"},{"location":"#TaijaPlotting.get_names-Tuple{Any}","page":"Home","title":"TaijaPlotting.get_names","text":"get_names(X)\n\nHelper function to get variables names of X.\n\n\n\n\n\n","category":"method"},{"location":"#TaijaPlotting.setup_ce_plot-Tuple{CounterfactualExplanations.CounterfactualExplanation}","page":"Home","title":"TaijaPlotting.setup_ce_plot","text":"setup_ce_plot(ce::CounterfactualExplanation)\n\nA helper method that prepares data for plotting.\n\n\n\n\n\n","category":"method"}]
}