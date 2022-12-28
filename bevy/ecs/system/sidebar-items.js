window.SIDEBAR_ITEMS = {"derive":[["Resource",""],["SystemParam","Implement `SystemParam` to use a struct as a parameter in a system"]],"enum":[["QueryComponentError","An error that occurs when retrieving a specific [`Entity`]’s component from a [`Query`]"]],"fn":[["assert_is_system","Ensure that a given function is a system"]],"mod":[["lifetimeless",""]],"struct":[["AlreadyWasSystem",""],["CommandQueue","A queue of [`Command`]s"],["Commands","A [`Command`] queue to perform impactful changes to the [`World`]."],["Despawn",""],["EntityCommands","A list of commands that will be run to modify an entity."],["ExclusiveFunctionSystem","A function system that runs with exclusive [`World`] access."],["FunctionSystem","The [`System`] counter part of an ordinary function."],["GetOrSpawn",""],["In","Wrapper type to mark a [`SystemParam`] as an input."],["InitResource",""],["Insert",""],["InsertOrSpawnBatch",""],["InsertResource",""],["IsExclusiveFunctionSystem",""],["IsFunctionSystem",""],["Local","A system local [`SystemParam`]."],["LogComponents","[`Command`] to log the components of a given entity. See [`EntityCommands::log_components`]."],["NonSend","Shared borrow of a non-[`Send`] resource."],["NonSendMut","Unique borrow of a non-[`Send`] resource."],["ParallelCommands","An alternative to [`Commands`] that can be used in parallel contexts, such as those in `Query::par_for_each`"],["ParamSet","A collection of potentially conflicting [`SystemParam`]s allowed by disjoint access."],["ParamSetState","The [`SystemParamState`] of [`ParamSet<T::Item>`]."],["PipeSystem","A [`System`] created by piping the output of the first system into the input of the second."],["Query","System parameter that provides selective access to the [`Component`] data stored in a [`World`]."],["Remove",""],["RemoveResource",""],["RemovedComponents","A [`SystemParam`] that grants access to the entities that had their `T` [`Component`] removed."],["Res","Shared borrow of a [`Resource`]."],["ResMut","Unique mutable borrow of a [`Resource`]."],["Spawn",""],["SpawnBatch",""],["StaticSystemParam","A helper for using system parameters in generic contexts"],["SystemChangeTick","A [`SystemParam`] that reads the previous and current change ticks of the system."],["SystemMeta","The metadata of a [`System`]."],["SystemName","Name of the system that corresponds to this [`crate::system::SystemState`]."],["SystemState","Holds on to persistent state required to drive [`SystemParam`] for a [`System`]."],["SystemTypeIdLabel","A [`SystemLabel`] that was automatically generated for a system on the basis of its `TypeId`."],["WithEntity","Turns an [`EntityCommand`] type into a [`Command`] type."]],"trait":[["AsSystemLabel","Used to implicitly convert systems to their default labels. For example, it will convert “system functions” to their [`SystemTypeIdLabel`]."],["Command","A [`World`] mutation."],["EntityCommand","A [`Command`] which gets executed for a given [`Entity`]."],["ExclusiveSystemParam",""],["ExclusiveSystemParamFunction","A trait implemented for all exclusive system functions that can be used as [`System`]s."],["ExclusiveSystemParamState","The state of a [`SystemParam`]."],["IntoPipeSystem","An extension trait providing the [`IntoPipeSystem::pipe`] method to pass input from one system into the next."],["IntoSystem","Conversion trait to turn something into a [`System`]."],["ReadOnlySystemParam","A [`SystemParam`] that only reads a given [`World`]."],["Resource","A type that can be inserted into a [`World`] as a singleton."],["System","An ECS system that can be added to a `Schedule`"],["SystemParam","A parameter that can be used in a `System`."],["SystemParamFunction","A trait implemented for all functions that can be used as [`System`]s."],["SystemParamState","The state of a [`SystemParam`]."]],"type":[["BoxedSystem","A convenience type alias for a boxed [`System`] trait object."],["ExclusiveSystemParamItem",""],["SystemParamItem",""]]};